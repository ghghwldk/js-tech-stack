// enums.ts

enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST',
}

enum OrderStatus {
    Pending = 'PENDING',
    Completed = 'COMPLETED',
    Cancelled = 'CANCELLED',
}

enum PaymentMethod {
    CreditCard = 'CREDIT_CARD',
    PayPal = 'PAYPAL',
    BankTransfer = 'BANK_TRANSFER',
}


function getUserRoleMessage(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return 'You have full access.';
        case UserRole.User:
            return 'You have limited access.';
        case UserRole.Guest:
            return 'You are browsing as a guest.';
        default:
            return 'Invalid role.';
    }
}

function getOrderStatusMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return 'Your order is pending.';
        case OrderStatus.Completed:
            return 'Your order is completed.';
        case OrderStatus.Cancelled:
            return 'Your order was cancelled.';
        default:
            return 'Invalid order status.';
    }
}

function getPaymentMethodMessage(method: PaymentMethod): string {
    switch (method) {
        case PaymentMethod.CreditCard:
            return 'You are paying with a Credit Card.';
        case PaymentMethod.PayPal:
            return 'You are paying with PayPal.';
        case PaymentMethod.BankTransfer:
            return 'You are paying via Bank Transfer.';
        default:
            return 'Invalid payment method.';
    }
}

// Example Usage in Another File
// main.ts
// import { UserRole, OrderStatus, PaymentMethod } from './enums';
export {
    UserRole,
    OrderStatus,
    PaymentMethod,
    getUserRoleMessage,
    getOrderStatusMessage,
    getPaymentMethodMessage,
}