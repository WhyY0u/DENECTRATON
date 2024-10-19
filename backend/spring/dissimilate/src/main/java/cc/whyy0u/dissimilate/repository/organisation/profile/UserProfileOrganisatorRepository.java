package cc.whyy0u.dissimilate.repository.organisation.profile;

import org.springframework.data.repository.CrudRepository;

import cc.whyy0u.dissimilate.entity.organisation.profile.UserProfileOrganisatorEntity;

public interface UserProfileOrganisatorRepository extends CrudRepository<UserProfileOrganisatorEntity, Long> {

    UserProfileOrganisatorEntity findByorganisationId(Long id);
    UserProfileOrganisatorEntity findByPhone(String phone);
}