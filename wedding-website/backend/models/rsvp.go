package models

import (
	"time"
)

// RSVP represents an RSVP submission
type RSVP struct {
	ID         uint      `gorm:"primaryKey" json:"id"`
	FullName   string    `json:"full_name"`
	FathersName string   `json:"fathers_name"`
	Email      string    `json:"email"`
	Whatsapp   string    `json:"whatsapp"`
	Address    string    `json:"address"`
	CreatedAt  time.Time `json:"created_at"`
}
