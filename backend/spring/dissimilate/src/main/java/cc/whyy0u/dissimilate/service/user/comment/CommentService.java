package cc.whyy0u.dissimilate.service.user.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.entity.comment.CommentEntity;
import cc.whyy0u.dissimilate.repository.comment.CommentRepository;
import java.util.List;
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;


    public List<CommentEntity> findProfileEntityById(Long id) {
        return commentRepository.findByuserId(id);
    }

    public void save(CommentEntity entity) {
        commentRepository.save(entity);
    }

    
}
