package cc.whyy0u.dissimilate.security.jwt;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import cc.whyy0u.dissimilate.entity.user.CustomUserDetails;
import cc.whyy0u.dissimilate.entity.user.UserEntity;
import cc.whyy0u.dissimilate.service.user.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import org.springframework.stereotype.Component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.util.StringUtils;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    public static final String BEARER_PREFIX = "Bearer ";
    public static final String HEADER_NAME = "Authorization";

   private final JwtService jwtService;
  private final UserService userService;

@Autowired
public JwtAuthenticationFilter(JwtService jwtService, UserService userService) {
    this.jwtService = jwtService;
    this.userService = userService;
}


    @Override
protected void doFilterInternal(
        @NonNull HttpServletRequest request,
        @NonNull HttpServletResponse response,
        @NonNull FilterChain filterChain
) throws ServletException, IOException {

    var authHeader = request.getHeader(HEADER_NAME);
    if (StringUtils.isEmpty(authHeader) || 
        !authHeader.startsWith(BEARER_PREFIX)) { 
        filterChain.doFilter(request, response);
        return;
    }

    var jwt = authHeader.substring(BEARER_PREFIX.length());
    var username = jwtService.extractUserName(jwt);

    if (username != null && !username.isEmpty() && SecurityContextHolder.getContext().getAuthentication() == null) {
        UserEntity entity = userService.getUserByLogin(username);
        UserDetails userDetails = new CustomUserDetails(entity);
        if (jwtService.isTokenValid(jwt, userDetails)) {
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            if(entity.getToken().equals(jwt)) {

            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    userDetails,
                    null,
                    userDetails.getAuthorities()
            );

            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            context.setAuthentication(authToken);
            SecurityContextHolder.setContext(context);
        }
    }
    }
    filterChain.doFilter(request, response);
}

}