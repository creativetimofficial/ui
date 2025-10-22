# Private Registry Authentication

The Creative Tim UI registry supports private components that require API key authentication. This allows you to secure premium or internal components while maintaining the same installation experience.

## Private Components

The following components are currently private and require authentication:

- `testimonials-03` - Testimonial with statistics and metrics
- `testimonials-04` - Three column testimonials with star ratings

## Authentication Methods

The private registry supports multiple authentication methods:

### 1. Environment Variable (Recommended)

Add your API key to `.env.local`:

```bash
API_KEY=your_api_key_here
```

Then install private components normally:

```bash
npx @creative-tim/ui@latest add testimonials-03
```

### 2. Authorization Header

Use Bearer token authentication:

```bash
curl -H "Authorization: Bearer your_api_key" \
  https://ui.creative-tim.com/r/testimonials-03.json
```

### 3. X-API-Key Header

Use custom API key header:

```bash
curl -H "X-API-Key: your_api_key" \
  https://ui.creative-tim.com/r/testimonials-03.json
```

### 4. Query Parameter

Pass the token as a query parameter:

```bash
curl https://ui.creative-tim.com/r/testimonials-03.json?token=your_api_key
```

## CLI Configuration

To use private components with the shadcn CLI, configure your `components.json`:

```json
{
  "registries": {
    "@creative-tim": {
      "url": "https://ui.creative-tim.com/r/{name}.json",
      "headers": {
        "Authorization": "Bearer ${API_KEY}"
      }
    }
  }
}
```

## Error Handling

### 401 Unauthorized

If you see this error, ensure your API key is set correctly:

```
Authentication required for private components. Set API_KEY in your .env.local file 
or provide it via Authorization header, X-API-Key header, or ?token= query parameter.
```

**Solutions:**
- Set `API_KEY` in your `.env.local` file
- Check that your API key is valid
- Ensure you're not committing your API key to version control

### 403 Forbidden

This means your API key is valid but doesn't have access to the requested component.

### 404 Not Found

The component either doesn't exist or is not a private component.

## Security Best Practices

1. **Never commit API keys to version control**
   - Always use environment variables
   - Add `.env.local` to your `.gitignore`

2. **Use HTTPS**
   - Always use HTTPS URLs to protect your API key in transit

3. **Rotate keys regularly**
   - Change your API key periodically for better security

4. **Use different keys for different environments**
   - Development, staging, and production should use separate keys

## Getting Your API Key

Contact us to get your API key for accessing private components:
- Email: support@creative-tim.com
- Website: https://ui.creative-tim.com/contact

## Example Usage

```bash
# Set your API key
export API_KEY=your_api_key_here

# Install a private component
npx @creative-tim/ui@latest add testimonials-03

# Or use curl to download directly
curl -H "Authorization: Bearer $API_KEY" \
  https://ui.creative-tim.com/r/testimonials-03.json -o testimonials-03.json
```

## Technical Details

Private components are served through an authenticated API route (`/api/r/[name]`) that validates your API key before returning the component definition. The registry middleware automatically redirects requests for private components to this authenticated endpoint.

Public components continue to be served statically from `/r/*.json` without authentication.
