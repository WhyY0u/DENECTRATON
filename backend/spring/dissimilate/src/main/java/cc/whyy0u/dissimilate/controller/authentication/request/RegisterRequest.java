package cc.whyy0u.dissimilate.controller.authentication.request;

import cc.whyy0u.dissimilate.entity.user.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotEmpty(message = "Name cannot be empty")
    @Size(min = 3, max = 45, message = "Name must be between 3 and 45 characters")
    private String name;

    @NotEmpty(message = "Surname cannot be empty")
    @Size(min = 3, max = 45, message = "Surname must be between 3 and 45 characters")
    private String surname;

    @NotEmpty(message = "Patronymic cannot be empty")
    @Size(min = 3, max = 45, message = "Patronymic must be between 3 and 45 characters")
    private String patronymic;

    @NotEmpty(message = "Login cannot be empty")
    @Size(min = 3, max = 25, message = "Login must be between 3 and 25 characters")
    private String login;

    @Email(message = "Invalid email format")
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    @Size(min = 8, max = 25, message = "Password must be between 8 and 25 characters")
    @NotEmpty(message = "Password cannot be empty")
    private String password;

    @NotNull(message = "Role cannot be null")
    private Role role;

    @Size(min = 4, max = 4, message = "Code must be between 4 and 4 characters")
    @NotEmpty(message = "Code cannot be empty")
    private String code;

    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getSurname() {
        return surname;
    }
    
    public void setSurname(String surname) {
        this.surname = surname;
    }
    
    public String getPatronymic() {
        return patronymic;
    }
    
    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }
    
    public String getLogin() {
        return login;
    }
    
    public void setLogin(String login) {
        this.login = login;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Role getRole() {
        return role;
    }
    
    public void setRole(Role role) {
        this.role = role;
    }
    
    public String getCode() {
        return code;
    }
    
    public void setCode(String code) {
        this.code = code;
    }
    

}
