package com.GymManegmnet.demo.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "trainer")
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is mandatory")
    @Column(name = "name", nullable = false)
    private String name;

    @Email(message = "Email should be valid")
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "Address must be provided")
    @Column(name = "address")
    private String address;

    // Changed from @NotBlank to @NotNull and fixed typo (paymnet to payment)
    @NotNull(message = "Payment is mandatory")
    @Column(name = "payment")
    private Long payment;

    @NotBlank(message = "Practice time is mandatory")
    @Column(name = "praticetime")
    private String praticetime;

    // Getters and setters can be omitted due to the @Data annotation (from Lombok)
}
