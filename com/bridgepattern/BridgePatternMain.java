package com.bridgepattern;

public class BridgePatternMain {
    public static void main(String[] args) {
        Bank avaloq = new AvaloqBank(new CurrentAccount());
        Account current = avaloq.openAccount();
        current.accountType();

        Bank abc = new ABCBank(new SavingAccount());
        Account saving = abc.openAccount();
        saving.accountType();
    }
}
