package com.example.prj.repository;

import com.example.prj.entity.WishlistItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;


@Repository
public interface WishlistItemRepository extends JpaRepository<WishlistItem, Integer> {

    List<WishlistItem>  findByUserId(Integer userId);
}

