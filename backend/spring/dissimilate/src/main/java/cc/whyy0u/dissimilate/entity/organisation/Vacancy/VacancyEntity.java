package cc.whyy0u.dissimilate.entity.organisation.Vacancy;



import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapKeyColumn;
import jakarta.persistence.Table;

import java.util.Map;
import java.math.BigDecimal;

@Entity
@Table(name = "vacancy")
public class VacancyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;

    @Column(name = "organisation_id", nullable = false) 
    private Long organisationId;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false) 
    private VacancyType type;

    @Column(name = "name", nullable = false) 
    private String name;

    @Column(name = "money", nullable = true) 
    private BigDecimal money; 

    @Column(name = "description", nullable = false) 
    private String description;

    @Column(name = "time", nullable = false) 
    private String time;

    @Column(name = "secured", nullable = false) 
    private boolean secured;

    @ElementCollection
    @CollectionTable(name = "vacancy_skill", joinColumns = @JoinColumn(name = "vacancy_id"))
    @MapKeyColumn(name = "skill_name") 
    @Column(name = "skill_value") 
    private Map<String, Integer> skill;

    @ElementCollection
    @CollectionTable(name = "vacancy_images", joinColumns = @JoinColumn(name = "vacancy_id"))
    @MapKeyColumn(name = "images_id") 
    @Column(name = "images_value") 
    private Map<Integer, String> images;

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

    public VacancyType getType() {
        return type;
    }

    public void setType(VacancyType type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getMoney() {
        return money;
    }

    public void setMoney(BigDecimal money) {
        this.money = money;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isSecured() {
        return secured;
    }

    public void setSecured(boolean secured) {
        this.secured = secured;
    }

    public Map<String, Integer> getSkill() {
        return skill;
    }

    public void setSkill(Map<String, Integer> skill) {
        this.skill = skill;
    }

    public Map<Integer, String> getImages() {
        return images;
    }

    public void setImages(Map<Integer, String> images) {
        this.images = images;
    }
}
