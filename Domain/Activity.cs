namespace Domain
{
    public class Activity
    {
        // Entity framework will recognise Id as primary key
        public Guid Id { get; set; }

        public string Title { get; set; }

        public int MyProperty { get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public string City { get; set; }

        public string Venue { get; set; }
    }
}