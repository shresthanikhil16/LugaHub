package com.example.prj.repository;

import com.example.prj.entity.Cart;
import com.example.prj.entity.WishlistItem;
import com.example.prj.pojo.CartPojo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findByUserId(Integer userId);


    @Modifying
    @Query(value="delete from cart_items where user_id=?1",nativeQuery = true)
    void deleteCartByUserId(Integer id);

}

