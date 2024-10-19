package cc.whyy0u.dissimilate.entity.organisation.profile;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.JoinColumn;
import java.util.List;

@Entity
@Table(name = "profileorganisator")
public class UserProfileOrganisatorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "organisation_id", unique = true, nullable = false)
    private Long organisationId;

    @Column(name = "phone", nullable = false, length = 45, unique = true)
    private String phone;

    @Column(name = "avatar_url")
    private String avatarUrl; 

    @Column(name = "curntSocial")
    private float curntSocial;

    @Column(name = "name_organisation", length = 45)  
    private String nameOrganisation;

    @Column(name = "description", length = 100)
    private String description;

    @ElementCollection
    @CollectionTable(name = "organisator_social_network", joinColumns = @JoinColumn(name = "organisation_id"))
    @Column(name = "organisator_social_network")
    private List<String> socialnetwork;

    @ElementCollection
    @CollectionTable(name = "organisator_followers", joinColumns = @JoinColumn(name = "organisation_id"))
    @Column(name = "organisator_follower_id")
    private List<Long> followers; 

    @ElementCollection
    @CollectionTable(name = "organisator_following", joinColumns = @JoinColumn(name = "organisation_id"))
    @Column(name = "organisator_following_id")
    private List<Long> following; 

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrganisationId() {
        return organisationId;
    }

    public void setOrganisationId(Long organisationId) {
        this.organisationId = organisationId;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public float getCurntSocial() {
        return curntSocial;
    }

    public void setCurntSocial(float curntSocial) {
        this.curntSocial = curntSocial;
    }

    public String getNameOrganisation() {
        return nameOrganisation;
    }

    public void setNameOrganisation(String nameOrganisation) {
        this.nameOrganisation = nameOrganisation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getSocialnetwork() {
        return socialnetwork;
    }

    public void setSocialnetwork(List<String> socialnetwork) {
        this.socialnetwork = socialnetwork;
    }

    public List<Long> getFollowers() {
        return followers;
    }

    public void setFollowers(List<Long> followers) {
        this.followers = followers;
    }

    public List<Long> getFollowing() {
        return following;
    }

    public void setFollowing(List<Long> following) {
        this.following = following;
    }
}
