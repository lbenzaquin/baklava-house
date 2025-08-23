using Microsoft.EntityFrameworkCore;
using ShoppingCart.Domain.Model;
namespace ShoppingCart.Infrastructure.Repositories
{
    public class ShoppingCartDbContext : DbContext
    {
        public ShoppingCartDbContext(DbContextOptions<ShoppingCartDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Configure your entity mappings here
        }

        // Define DbSets for your entities
        public DbSet<AbandonedCart> AbandonedCarts { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<AuditLog> AuditLogs { get; set; }
        public DbSet<AvailabilityPolicy> AvailabilityPolicies { get; set; }
        public DbSet<Backorder> Backorders { get; set; }
        public DbSet<Bundle> Bundles { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<Carrier> Carriers { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartAdjustment> CartAdjustments { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<CartItemAdjustment> CartItemAdjustments { get; set; }
        public DbSet<CartNote> CartNotes { get; set; }
        public DbSet<CartSnapshot> CartSnapshots { get; set; }
        public DbSet<Channel> Channels { get; set; }
        public DbSet<Chargeback> Chargebacks { get; set; }
        public DbSet<ComplianceDocument> ComplianceDocuments { get; set; }
        public DbSet<ConfigOption> ConfigOptions { get; set; }
        public DbSet<Consent> Consents { get; set; }
        public DbSet<Coupon> Coupons { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<DeliveryAttempt> DeliveryAttempts { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<DiscountRule> DiscountRules { get; set; }
        public DbSet<DomainEvent> DomainEvents { get; set; }
        public DbSet<Exchange> Exchanges { get; set; }
        public DbSet<ExchangeRate> ExchangeRates { get; set; }
        public DbSet<Fee> Fees { get; set; }
        public DbSet<FraudCheck> FraudChecks { get; set; }
        public DbSet<FulfillmentCenter> FulfillmentCenters { get; set; }
        public DbSet<GiftCard> GiftCards { get; set; }
        public DbSet<IdempotencyKey> IdempotencyKeys { get; set; }
        public DbSet<InventoryItem> InventoryItems { get; set; }
        public DbSet<InventoryReservation> InventoryReservations { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Jurisdiction> Jurisdictions { get; set; }
        public DbSet<LoyaltyAccount> LoyaltyAccounts { get; set; }
        public DbSet<OptionValue> OptionValues { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderAdjustment> OrderAdjustments { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<OrderTaxLine> OrderTaxLines { get; set; }
        public DbSet<OutboxMessage> OutboxMessages { get; set; }
        public DbSet<Package> Packages { get; set; }
        public DbSet<PaymentIntent> PaymentIntents { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }
        public DbSet<PaymentTransaction> PaymentTransactions { get; set; }
        public DbSet<Preference> Preferences { get; set; }
        public DbSet<Preorder> Preorders { get; set; }
        public DbSet<Price> Prices { get; set; }
        public DbSet<PriceList> PriceLists { get; set; }
        public DbSet<PriceTier> PriceTiers { get; set; }
        public DbSet<ProcessManager> ProcessManagers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<Rate> Rates { get; set; }
        public DbSet<Refund> Refunds { get; set; }
        public DbSet<ReplenishmentPlan> ReplenishmentPlans { get; set; }
        public DbSet<Return> Returns { get; set; }
        public DbSet<Rma> Rmas { get; set; }
        public DbSet<RoundingPolicy> RoundingPolicies { get; set; }
        public DbSet<Saga> Sagas { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Shipment> Shipments { get; set; }
        public DbSet<ShipmentItem> ShipmentItems { get; set; }
        public DbSet<ShippingLine> ShippingLines { get; set; }
        public DbSet<ShippingMethod> ShippingMethods { get; set; }
        public DbSet<Sku> Skus { get; set; }
        public DbSet<StockLocation> StockLocations { get; set; }
        public DbSet<Store> Stores { get; set; }
        public DbSet<StoreCredit> StoreCredits { get; set; }
        public DbSet<TaxCategory> TaxCategories { get; set; }
        public DbSet<TaxLine> TaxLines { get; set; }
        public DbSet<TaxRate> TaxRates { get; set; }
        public DbSet<UTMSource> UTMSources { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Variant> Variants { get; set; }

    }
}
