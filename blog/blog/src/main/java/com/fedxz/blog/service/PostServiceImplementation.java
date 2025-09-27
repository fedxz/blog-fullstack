package com.fedxz.blog.service;

import com.fedxz.blog.entity.Post;
import com.fedxz.blog.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PostServiceImplementation implements PostService {
    @Autowired
    private PostRepository postRepository;

    public Post savePost (Post post) {
        post.setLikeCount(0);
        post.setViewCont(0);
        post.setDate(LocalDateTime.now());

       return postRepository.save(post);
    }
}
