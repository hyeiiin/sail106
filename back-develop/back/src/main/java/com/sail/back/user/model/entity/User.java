package com.sail.back.user.model.entity;

import com.sail.back.user.model.entity.enums.AuthProvider;
<<<<<<< HEAD
import com.sail.back.user.model.entity.enums.UserGender;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CurrentTimestamp;

import java.time.LocalDateTime;
import java.util.Date;
=======
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a

@Entity
@Table(name="users")
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User {
    @Id
<<<<<<< HEAD
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", precision = 10, scale = 2)
    private Long id;

    @Column(name="email", unique = true, nullable = false)
    private String email;

    @Column(name="name")
    private String name;

    @Column(name = "nickname")
    private String nickname;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name = "create_at", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createAt;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @Column(name="profile_img_url")
    private String profileImgUrl;

    @Enumerated(EnumType.STRING)
    private UserGender gender;

    @Column(name = "birthdate_year")
    private String birthdateYear;

    @Column(name = "birthdate_month")
    private String birthdateMonth;
=======
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
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a
}
