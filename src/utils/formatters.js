/**
 * Utility functions for formatting dates, numbers, and text
 */

/**
 * Format a date to a readable string
 * @param {Date|string} date - Date object or date string
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}) {
    const defaultOptions = {
      format: 'medium', // 'short', 'medium', 'long'
      includeTime: false,
    };
    
    const config = { ...defaultOptions, ...options };
    const dateObj = date instanceof Date ? date : new Date(date);
    
    // Format options
    if (config.format === 'short') {
      // Example: 01/15/2025
      return dateObj.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    } else if (config.format === 'medium') {
      // Example: Jan 15, 2025
      const formatted = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      
      if (config.includeTime) {
        return `${formatted} at ${dateObj.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })}`;
      }
      return formatted;
    } else if (config.format === 'long') {
      // Example: January 15, 2025
      return dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
    
    return dateObj.toLocaleDateString();
  }
  
  /**
   * Format a number as currency
   * @param {number} value - Number to format
   * @param {string} currency - Currency code (default: USD)
   * @returns {string} Formatted currency string
   */
  export function formatCurrency(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }
  
  /**
   * Format a number with commas and decimal places
   * @param {number} value - Number to format
   * @param {number} decimals - Number of decimal places
   * @returns {string} Formatted number string
   */
  export function formatNumber(value, decimals = 0) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }
  
  /**
   * Format a number as a percentage
   * @param {number} value - Number to format (0.1 = 10%)
   * @param {number} decimals - Number of decimal places
   * @returns {string} Formatted percentage string
   */
  export function formatPercent(value, decimals = 1) {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }
  
  /**
   * Truncate text to a specified length with ellipsis
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length before truncation
   * @returns {string} Truncated text
   */
  export function truncateText(text, maxLength = 100) {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }
  
  /**
   * Capitalize the first letter of a string
   * @param {string} text - Text to capitalize
   * @returns {string} Capitalized text
   */
  export function capitalizeFirst(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  /**
   * Format a phone number to a readable format
   * @param {string} phone - Phone number to format
   * @returns {string} Formatted phone number
   */
  export function formatPhoneNumber(phone) {
    if (!phone) return '';
    
    // Remove all non-numeric characters
    const cleaned = ('' + phone).replace(/\D/g, '');
    
    // Format based on number length
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length === 11) {
      return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
    }
    
    return phone;
  }