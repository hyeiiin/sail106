package com.sail.back.user.model.entity;

import com.sail.back.user.model.entity.enums.AuthProvider;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
import com.sail.back.user.model.entity.enums.UserGender;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CurrentTimestamp;

import java.time.LocalDateTime;
import java.util.Date;
<<<<<<< HEAD
=======
=======
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e

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
=======
<<<<<<< HEAD
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
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
<<<<<<< HEAD
=======
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
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
}
