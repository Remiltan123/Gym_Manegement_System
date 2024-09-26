package com.GymManegmnet.demo.Service;

import com.GymManegmnet.demo.Model.Admin;

public interface GymAdminService {
    Admin SaveAdmin (Admin admin);
    boolean LoginAdmin(String email, String password);
}
