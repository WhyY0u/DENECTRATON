package cc.whyy0u.dissimilate.controller.authentication.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SendCodeRequest {

    @NotEmpty(message = "Login cannot be empty")
    @Size(min = 3, max = 25, message = "Login must be between 3 and 25 characters")
    private String login;

    @Email(message = "Invalid email format")
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
