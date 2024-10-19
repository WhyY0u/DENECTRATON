package cc.whyy0u.dissimilate.repository.organisation;

import org.springframework.data.repository.CrudRepository;

import cc.whyy0u.dissimilate.entity.organisation.OrganisationEntity;

public interface OrganinationRepository extends CrudRepository<OrganisationEntity, Long> {
    OrganisationEntity findBycreatorId(Long creatorId);
}