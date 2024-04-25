export interface OpenAccountProps {
    type: "openAccount";
}
export interface DepositProps {
    type: "deposit";
    payload: number;
}

export interface WithdrawProps {
    type: "withdraw";
    payload: number;
}

export interface RequestLoanProps {
    type: "requestLoan";
    payload: number;
}

export interface PayLoanProps {
    type: "payLoan";
}

export interface CreateAccountProps {
    type: "closeAccount";
}

export interface State {
    balance: number;
    loan: number;
    isActive: boolean;
}

export type Action = OpenAccountProps | DepositProps | WithdrawProps | RequestLoanProps | PayLoanProps | CreateAccountProps;
