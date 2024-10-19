package cc.whyy0u.dissimilate.controller.user.request;



import java.util.Map;

import jakarta.validation.constraints.Size;

import java.util.List;

public class ProfileUPD {

    @Size(max = 45, message = "Длина номера телефона не должна превышать 45 символов.")
    private String phone;

    private String avatarUrl; 

    private float curntSocial;

    @Size(max = 100, message = "Длина description не должна превышать 100 символов.")
    private String description;

    private List<String> socialnetwork;

    private List<Long> followers; 

    private List<Long> following; 

    private Map<String, Integer> skill;

    public Map<String, Integer> getSkill() {
        return skill;
    }

    public void setSKill(Map<String, Integer> skill) {
        this.skill = skill;
    }
    
    public List<String> getSocialNetWork() {
        return socialnetwork;
    }

    public void setSocialNetWork(List<String> socialnetwork) {
     this.socialnetwork = socialnetwork;
    }
     
    public void setCurntSocial(int curntSocial) {
      this.curntSocial = curntSocial;
    }

    public float getCurntSocial() {
           return curntSocial;
    }

    public String getPhone() {
        return phone;
    }
    public String getAvatarURL() {
        return avatarUrl;
    }
    public String Description() {
        return description;
    }
    public List<Long> getFollowers() {
        return followers;
    }
    public List<Long> getFollowing() {
        return following;
    }

    public void SetPhone(String phone) {
        this.phone = phone;
    }
    public void setAvatarURL(String url) {
        avatarUrl = url;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setFollowers(List<Long> fo) {
        followers = fo;
    }
    public void setFollowing(List<Long> fo) {
        following = fo;
    }
}
