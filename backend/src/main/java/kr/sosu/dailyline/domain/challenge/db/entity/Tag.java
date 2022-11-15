package kr.sosu.dailyline.domain.challenge.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Entity
@Table(name = "challenge_tag")
public class Tag {

    @Id
    @Column(name = "tag_seq")
    private int tagSeq;

    @Column(name = "tag_name")
    private String tagName;
}
