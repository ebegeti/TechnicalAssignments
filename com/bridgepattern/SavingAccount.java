package com.bridgepattern;

public class SavingAccount implements Account {

    @Override
    public Account openAccount(){
        System.out.println("Opened: Saving Account");
        return new SavingAccount();
    }

    @Override
    public void accountType() {
        System.out.println("##It is a Saving Account##");
    }
}
