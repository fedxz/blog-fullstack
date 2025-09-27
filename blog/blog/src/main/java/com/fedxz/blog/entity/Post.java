package com.fedxz.blog.entity;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Date;

@Entity
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Lob
    private String content;

    private String postedBy;

    private String img;

    private LocalDateTime date;

    private int likeCount;

    private int viewCont;

    @ElementCollection
    private List<String> tags;

}
