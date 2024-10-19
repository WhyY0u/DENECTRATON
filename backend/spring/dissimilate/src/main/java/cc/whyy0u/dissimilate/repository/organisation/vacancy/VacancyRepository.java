package cc.whyy0u.dissimilate.repository.organisation.vacancy;

import org.springframework.data.repository.CrudRepository;

import cc.whyy0u.dissimilate.entity.organisation.Vacancy.VacancyEntity;

public interface VacancyRepository extends CrudRepository<VacancyEntity, Long> {

    VacancyEntity findByorganisationId(Long organisationId);
}