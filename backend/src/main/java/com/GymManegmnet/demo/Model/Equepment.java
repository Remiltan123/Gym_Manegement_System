package com.GymManegmnet.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name="Equipment")
public class Equepment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Ename")
    @NotBlank(message = "Name is mandatory")
    private String name;

    @Column(name = "availableAmount")
    @NotNull(message = "Available amount is mandatory")
    private Integer availableAmount;

    @Column(name = "benefits")
    @NotBlank(message = "Benefits are mandatory")
    private String benefits;

    @Column(name = "cost")
    @NotNull(message = "Cost is mandatory")
    private Integer cost;

    @Column(name = "DeliveryDate")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate deliveryDate;


    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAvailableAmount() {
        return availableAmount;
    }

    public void setAvailableAmount(Integer availableAmount) {
        this.availableAmount = availableAmount;
    }

    public String getBenefits() {
        return benefits;
    }

    public void setBenefits(String benefits) {
        this.benefits = benefits;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }
}
