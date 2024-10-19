package cc.whyy0u.dissimilate.service.user.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.entity.user.Card.UserCardEntity;
import cc.whyy0u.dissimilate.repository.user.Card.UserCardRepository;
import java.util.List;

@Service
public class UserCardService {

    @Autowired
    private UserCardRepository userCardRepository;


    public List<UserCardEntity> findCardByUserID(Long id) {
        return userCardRepository.findByUserid(id);
    }

    public void save(UserCardEntity entity) {
        userCardRepository.save(entity);
    }

    
}