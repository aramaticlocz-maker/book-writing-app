# API Documentation

## Base URL

```
http://localhost:5000/api
```

## Stories

### Create Story
```
POST /stories
{ "title": "...", "genre": "...", "description": "...", "authorId": "..." }
```

### List Stories
```
GET /stories
```

### Get Story Details
```
GET /stories/:id
```

### Update Story
```
PUT /stories/:id
{ "title": "...", "description": "..." }
```

## Characters

### Create Character
```
POST /characters
{ "storyId": "...", "name": "...", "age": 30, "role": "...", "background": "...", "personality": "..." }
```

### Get Characters
```
GET /characters/story/:storyId
```

### Update Character
```
PUT /characters/:id
```

### Delete Character
```
DELETE /characters/:id
```

## Chapters

### Create Chapter
```
POST /chapters
{ "storyId": "...", "chapterNumber": 1, "title": "...", "content": "...", "summary": "..." }
```

### Get Chapters
```
GET /chapters/story/:storyId
```

### Update Chapter
```
PUT /chapters/:id
{ "content": "...", "themes": [...] }
```

## AI Features

### Generate Chapter
```
POST /ai/generate-chapter
{ "storyId": "...", "genre": "...", "themes": [...], "outline": "..." }
```

### Check Grammar
```
POST /ai/check-grammar
{ "text": "..." }
```

### Detect Themes
```
POST /ai/detect-themes
{ "content": "...", "existingThemes": [...] }
```

### Suggest Dialogue
```
POST /ai/suggest-dialogue
{ "character": {...}, "context": "...", "genre": "..." }
```

### Detect Plot Holes
```
POST /ai/detect-plot-holes
{ "storyId": "..." }
```
