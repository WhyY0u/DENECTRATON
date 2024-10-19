package cc.whyy0u.dissimilate.entity.user.Profile;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Map;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapKeyColumn;

import java.util.List;



@Entity
@Table(name = "profileгuser")
public class UserProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "userid", unique = true, nullable = false)
    private Long userid;

    @Column(name = "phone", nullable = true, unique = false, length = 45)
    private String phone;

    @Column(name = "avatar_url")
    private String avatarUrl; 

    @Column(name = "curntSocial")
    private float curntSocial;

    @Column(name = "description", length = 100)
    private String description;

    @ElementCollection
    @CollectionTable(name = "socialnetwork", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "socialnetwork")
    private List<String> socialnetwork;

    @ElementCollection
    @CollectionTable(name = "followers", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "follower")
    private List<Long> followers; 
    

    @ElementCollection
    @CollectionTable(name = "following", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "following")
    private List<Long> following; 


    @ElementCollection
    @CollectionTable(name = "skill", joinColumns = @JoinColumn(name = "user_id"))
    @MapKeyColumn(name = "skill_name") 
    @Column(name = "skil_value") 
    private Map<String, Integer> skill;

    public Map<String, Integer> getSkill() {
        return skill;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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
     
    public void setCurntSocial(float curntSocial) {
      this.curntSocial = curntSocial;
    }

    public float getCurntSocial() {
           return curntSocial;
    }

    public Long getID() {
        return id;
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

    public void setID(Long id) {
        this.id = id;
    }
    public void setUserID(Long id) {
        this.userid = id;
    }
    public Long getUserId() {
        return userid;
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
