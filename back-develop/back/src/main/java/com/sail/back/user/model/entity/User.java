package com.sail.back.user.model.entity;

import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User {
    @Id
    @Column(name="id")
    private Long id;

    @Column(name="email")
    private String email;

    @Column(name="department")
    private String department;

    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;

    @Column(name="create_at")
    private LocalDateTime createAt;

    @Column(name="provider")
    private AuthProvider provider;

    @Column(name="role")
    private UserRole role;

    @Column(name="status")
    private UserStatus status;
}
