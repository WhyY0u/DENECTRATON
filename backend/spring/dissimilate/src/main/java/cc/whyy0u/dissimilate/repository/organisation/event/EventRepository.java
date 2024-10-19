package cc.whyy0u.dissimilate.repository.organisation.event;


import org.springframework.data.repository.CrudRepository;

import cc.whyy0u.dissimilate.entity.organisation.Event.Event;

public interface EventRepository extends CrudRepository<Event, Long> {

    Event findByorganisationId(Long orgamosationID);
}