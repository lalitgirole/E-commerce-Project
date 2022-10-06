package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.UserVM;

import java.util.List;

public interface UserService {

    public List<UserMaster> getAllUser();//get
    public int saveUser(UserVM userVM);//create,, post
    public UserMaster getUserById(Long userId);//get by id
    public String updateUser(Long id,UserVM userVM);//put .. update
    public String deleteUser(Long id);//delete
}
