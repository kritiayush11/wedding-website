package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"wedding-backend/models"
	"wedding-backend/handlers"
)

func main() {
	// Build your DSN (Data Source Name) - adjust these values as needed
	dsn := "host=localhost user=myuser password=mypass dbname=mydb port=5432 sslmode=disable TimeZone=UTC"

	
	// Connect to PostgreSQL using GORM
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}

	// Run auto-migration for the RSVP model
	if err := db.AutoMigrate(&models.RSVP{}); err != nil {
		log.Fatalf("failed to migrate database: %v", err)
	}

	// Set up Gin router
	router := gin.Default()

	// Pass the DB instance to your handler
	rsvpHandler := handlers.NewRSVPHandler(db)
	
	// Define your API endpoint for RSVPs
	router.POST("/api/rsvp", rsvpHandler.CreateRSVP)

	// Start the server on a specified port (e.g., 8080)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	router.Run(":" + port)
}
