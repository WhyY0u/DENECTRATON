package cc.whyy0u.dissimilate.entity.user.Profile;



import cc.whyy0u.dissimilate.entity.comment.CommentEntity;
import cc.whyy0u.dissimilate.entity.user.Role;
import cc.whyy0u.dissimilate.entity.user.Card.UserCardEntity;

import java.util.List;
import java.util.Map;

public class UserProfileEntityUtils {

    public Long id;
    public Long userid;
    public String phone;
    public String avatarUrl; 
    public float curntSocial;
    public String description;
    public List<String> socialnetwork;
    public List<Long> followers; 
    public List<Long> following; 
    public Map<String, Integer> skill;
    public String name, surname, patronymic;
    public Role role;
    public List<UserCardEntity> userCards;
    public String email;
    public List<CommentEntity> comments;
    
    public UserProfileEntityUtils(UserProfileEntity entity,  List<UserCardEntity> userCards, List<CommentEntity> comments, String name, String surname, String patronymic, Role role, String email) {
        this.id = entity.getID();
        this.userid = entity.getUserId();
        this.phone = entity.getPhone();
        this.avatarUrl = entity.getAvatarURL();
        this.curntSocial = entity.getCurntSocial();
        this.description = entity.Description();
        this.socialnetwork = entity.getSocialNetWork();
        this.followers = entity.getFollowers();
        this.following = entity.getFollowing();
        this.skill = entity.getSkill();
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.role = role;
        this.email = email;
        this.userCards = userCards;
        this.comments = comments;
    }
}
