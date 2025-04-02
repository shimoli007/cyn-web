/**
 * Utility functions for form validation
 */

/**
 * Validate an email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export function isValidEmail(email) {
    if (!email) return false;
    
    // Basic email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  /**
   * Validate a phone number
   * @param {string} phone - Phone number to validate
   * @returns {boolean} True if valid
   */
  export function isValidPhone(phone) {
    if (!phone) return false;
    
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Check if we have a reasonable number of digits
    return cleaned.length >= 10 && cleaned.length <= 15;
  }
  
  /**
   * Validate a name (non-empty, no numbers)
   * @param {string} name - Name to validate
   * @returns {boolean} True if valid
   */
  export function isValidName(name) {
    if (!name || name.trim() === '') return false;
    
    // Name should not contain numbers
    return !/\d/.test(name);
  }
  
  /**
   * Validate a URL
   * @param {string} url - URL to validate
   * @returns {boolean} True if valid
   */
  export function isValidUrl(url) {
    if (!url) return false;
    
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  /**
   * Validate a password
   * @param {string} password - Password to validate
   * @param {Object} options - Validation options
   * @returns {Object} Validation result with isValid and message
   */
  export function validatePassword(password, options = {}) {
    const defaultOptions = {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
    };
    
    const config = { ...defaultOptions, ...options };
    const result = { isValid: true, message: 'Password is valid' };
    
    if (!password || password.length < config.minLength) {
      result.isValid = false;
      result.message = `Password must be at least ${config.minLength} characters long`;
      return result;
    }
    
    if (config.requireUppercase && !/[A-Z]/.test(password)) {
      result.isValid = false;
      result.message = 'Password must contain at least one uppercase letter';
      return result;
    }
    
    if (config.requireLowercase && !/[a-z]/.test(password)) {
      result.isValid = false;
      result.message = 'Password must contain at least one lowercase letter';
      return result;
    }
    
    if (config.requireNumbers && !/\d/.test(password)) {
      result.isValid = false;
      result.message = 'Password must contain at least one number';
      return result;
    }
    
    if (config.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      result.isValid = false;
      result.message = 'Password must contain at least one special character';
      return result;
    }
    
    return result;
  }
  
  /**
   * Validate a form field
   * @param {string} value - Field value
   * @param {string} type - Field type
   * @param {Object} options - Validation options
   * @returns {Object} Validation result with isValid and message
   */
  export function validateField(value, type, options = {}) {
    const defaultOptions = {
      required: true,
      minLength: 0,
      maxLength: Infinity,
    };
    
    const config = { ...defaultOptions, ...options };
    const result = { isValid: true, message: '' };
    
    // Check if required
    if (config.required && (!value || value.trim() === '')) {
      result.isValid = false;
      result.message = 'This field is required';
      return result;
    }
    
    // Skip further validation if empty and not required
    if (!value && !config.required) {
      return result;
    }
    
    // Check length constraints
    if (value.length < config.minLength) {
      result.isValid = false;
      result.message = `Must be at least ${config.minLength} characters`;
      return result;
    }
    
    if (value.length > config.maxLength) {
      result.isValid = false;
      result.message = `Must be no more than ${config.maxLength} characters`;
      return result;
    }
    
    // Type-specific validation
    switch (type) {
      case 'email':
        if (!isValidEmail(value)) {
          result.isValid = false;
          result.message = 'Please enter a valid email address';
        }
        break;
        
      case 'phone':
        if (!isValidPhone(value)) {
          result.isValid = false;
          result.message = 'Please enter a valid phone number';
        }
        break;
        
      case 'name':
        if (!isValidName(value)) {
          result.isValid = false;
          result.message = 'Please enter a valid name';
        }
        break;
        
      case 'url':
        if (!isValidUrl(value)) {
          result.isValid = false;
          result.message = 'Please enter a valid URL';
        }
        break;
        
      case 'password':
        const passwordResult = validatePassword(value, options.passwordOptions || {});
        if (!passwordResult.isValid) {
          result.isValid = false;
          result.message = passwordResult.message;
        }
        break;
    }
    
    return result;
  }
  
  /**
   * Validate a complete form
   * @param {Object} values - Form values
   * @param {Object} validationSchema - Validation schema
   * @returns {Object} Validation results with errors
   */
  export function validateForm(values, validationSchema) {
    const errors = {};
    
    Object.keys(validationSchema).forEach(field => {
      const { type, ...options } = validationSchema[field];
      const result = validateField(values[field], type, options);
      
      if (!result.isValid) {
        errors[field] = result.message;
      }
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }