package com.sail.back.security.model.repository;

import com.sail.back.security.model.entity.UnsafeToken;
import org.springframework.data.repository.CrudRepository;

public interface UnsafeTokenRepository extends CrudRepository<UnsafeToken, String> {
}
