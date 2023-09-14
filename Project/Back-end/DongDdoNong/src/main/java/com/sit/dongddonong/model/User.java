package com.sit.dongddonong.model;

import com.sit.dongddonong.dto.UserDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class User {
    @Id
    private Long id;
    @Column
    private String type;
    @Column
    private String profileImgUrl;
    @Column
    private String name;
    @Column
    private String nickName;
    @Column
    private long playTime;
    @Column
    private String email;

    public static User userToEntity(UserDto userDto){
        return User.builder()
                .id(userDto.getId())
                .email(userDto.getEmail())
                .name(userDto.getName())
                .type(userDto.getType())
                .nickName(userDto.getNickName())
                .playTime(userDto.getPlayTime())
                .profileImgUrl(userDto.getProfileImgUrl())
                .build();
    }

}
