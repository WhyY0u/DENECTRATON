package cc.whyy0u.dissimilate.repository.comment;

import org.springframework.data.repository.CrudRepository;

import cc.whyy0u.dissimilate.entity.comment.CommentEntity;
import java.util.List;
public interface CommentRepository extends CrudRepository<CommentEntity, Long> {

    List<CommentEntity> findByuserId(Long id);
}