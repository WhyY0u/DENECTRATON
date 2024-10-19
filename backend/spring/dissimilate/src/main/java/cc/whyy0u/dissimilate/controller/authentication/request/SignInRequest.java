package cc.whyy0u.dissimilate.controller.authentication.request;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignInRequest {


    @NotEmpty(message = "Login cannot be empty")
    @Size(min = 3, max = 25, message = "Login must be between 3 and 25 characters")
    private String login;


    @Size(min = 8, max = 25, message = "Password must be between 8 and 25 characters")
    @NotEmpty(message = "Password cannot be empty")
    private String password;
   
    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }

}
