package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"wedding-backend/models"
)

// RSVPHandler handles RSVP requests
type RSVPHandler struct {
	DB *gorm.DB
}

// NewRSVPHandler creates a new RSVPHandler
func NewRSVPHandler(db *gorm.DB) *RSVPHandler {
	return &RSVPHandler{DB: db}
}

// CreateRSVP handles POST requests to create an RSVP
func (h *RSVPHandler) CreateRSVP(c *gin.Context) {
	var rsvp models.RSVP

	// Bind JSON body to rsvp struct
	if err := c.ShouldBindJSON(&rsvp); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Set additional fields
	rsvp.CreatedAt = time.Now()

	// Save RSVP to the database
	if err := h.DB.Create(&rsvp).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save RSVP"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "RSVP submitted successfully", "rsvp": rsvp})
}
