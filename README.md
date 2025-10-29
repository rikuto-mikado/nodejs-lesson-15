# Node.js Lesson 15 - Express Router & File Serving

## What I Learned

### 1. Express Router
Express allows organizing routes into separate modules using `express.Router()`.

```javascript
const router = express.Router();
router.get('/add-product', (req, res, next) => { ... });
module.exports = router;
```

### 2. File Path Construction with `path.join()` and `__dirname`

| Component | Description |
|-----------|-------------|
| `__dirname` | Absolute path to the **current directory** where the file is located |
| `path.join()` | Joins path segments in a platform-independent way |
| `'../'` | Navigates up to the parent directory |

**Example:**
```javascript
// In routes/admin.js
path.join(__dirname, '../', 'views', 'add-product.html')
// __dirname = /Users/.../routes
// '../' = go up to project root
// Final path: /Users/.../views/add-product.html
```

### 3. Serving Static HTML Files
```javascript
res.sendFile(absolutePath)  // Must use absolute path
```

### 4. Route Prefixes
When mounting router in main app:
```javascript
app.use('/admin', adminRoutes);  // Adds /admin prefix to all routes
```

Then `/add-product` in router becomes `/admin/add-product` in the app.

## Challenges

### Path Navigation Confusion
**Challenge:** Understanding relative paths from different directories
- `routes/admin.js` needs `'../'` to reach project root, then `'views'`
- Forgetting to go up from the routes folder caused file not found errors

### Route Path Matching
**Challenge:** GET and POST routes must match
- L GET `/admin/add-product` + POST `/add-product` � mismatch
- Both use `/add-product` (prefix added by `app.use('/admin', ...)`)

### `__dirname` vs Relative Paths
**Challenge:** `res.sendFile()` requires absolute paths
- Cannot use `'./views/shop.html'` directly
- Must use `path.join(__dirname, ...)` to construct absolute path
