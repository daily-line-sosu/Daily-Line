package kr.sosu.dailyline.domain.user.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = -896165527L;

    public static final QUser user = new QUser("user");

    public final EnumPath<Role> role = createEnum("role", Role.class);

    public final StringPath userEmail = createString("userEmail");

    public final StringPath userIntroduce = createString("userIntroduce");

    public final StringPath userName = createString("userName");

    public final StringPath userProfileImage = createString("userProfileImage");

    public final NumberPath<Long> userSeq = createNumber("userSeq", Long.class);

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

