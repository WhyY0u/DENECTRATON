package cc.whyy0u.dissimilate.entity.user.Card;


import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


import javax.persistence.CollectionTable;
import javax.persistence.JoinColumn;
import java.util.HashMap;
import java.util.Map;


@Entity
@Table(name = "card")
public class UserCardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "userid", nullable = false)
    private Long userid;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "post_name", nullable = false)
    private String postName;

    @Column(name = "time", nullable = false)
    private String time;

    @Column(name = "type", nullable = false)
    private String type = "card";

    @ElementCollection
    @CollectionTable(name = "card_list_name", joinColumns = @JoinColumn(name = "entity_id"))
    @Column(name = "value")
    private Map<Integer, String> column_name = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "card_list_column", joinColumns = @JoinColumn(name = "entity_id"))
    @Column(name = "value")
    private Map<Integer, Boolean> column_value = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "card_list_column_2", joinColumns = @JoinColumn(name = "entity_id"))
    @Column(name = "value")
    private Map<Integer, Boolean> column_value2 = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "card_list_column_3", joinColumns = @JoinColumn(name = "entity_id"))
    @Column(name = "value")
    private Map<Integer, Boolean> column_value3 = new HashMap<>();



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPostName() {
        return postName;
    }

    public void setPostName(String postName) {
        this.postName = postName;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


}
