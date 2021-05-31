package com.bridgepattern;

public class AvaloqBank extends Bank {
    public AvaloqBank(Account account) {
        super(account);
    }

    @Override
    Account openAccount() {
        System.out.print("Open your account with Avaloq Bank");
        return account;
    }
}
