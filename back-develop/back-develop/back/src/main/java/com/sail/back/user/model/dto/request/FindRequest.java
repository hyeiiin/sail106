package com.sail.back.user.model.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;
import lombok.extern.slf4j.Slf4j;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class FindRequest {

    private boolean id;
    private boolean email;
    private boolean name;
    private boolean nickname;
    private boolean create_at;
    private boolean provider;
    private boolean role;
    private boolean status;
    private boolean profile_img_url;
    private boolean gender;
    private boolean birthdate_year;
    private boolean birthdate_month;
}
