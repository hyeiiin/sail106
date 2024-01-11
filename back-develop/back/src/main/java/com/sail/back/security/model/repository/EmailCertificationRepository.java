package com.sail.back.security.model.repository;

import com.sail.back.security.model.entity.CertificationNumber;
import org.springframework.data.repository.CrudRepository;

public interface EmailCertificationRepository extends CrudRepository<CertificationNumber, String> {

}
