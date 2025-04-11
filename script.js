const workoutData = {
    monday: [
        { type: 'heading', name: "Chest & Triceps" },
        { name: "Chest Fly (4 sets)", sets: 4 },
        { name: "Chest Press (4 sets)", sets: 4 },
        { name: "Pushups Practice (50 reps)", sets: 4 },
        { name: "Pullups Practice (30 reps)", sets: 4 },
        { name: "Tricep Pushdown (4 sets)", sets: 4 },
        { name: "Tricep Kickbacks (4 sets)", sets: 4 },
        { name: "Back Dips (4 sets)", sets: 4 }
    ],
    tuesday: [
        { type: 'heading', name: "Back" },
        { name: "Pulldown (4 sets)", sets: 4 },
        { name: "Seated Cable Row (4 sets)", sets: 4 },
        { name: "Lat Pulldown (4 sets)", sets: 4 },
        { type: 'heading', name: "Biceps" },
        { name: "Dumbbell Biceps Curl (4 sets)", sets: 4 },
        { name: "Preacher Curl (4 sets)", sets: 4 },
        { name: "Hammer Curl (4 sets)", sets: 4 },
        { name: "Concentration Curl (4 sets)", sets: 4 }
    ],
    wednesday: [
        { type: 'heading', name: "Legs" },
        { name: "Back Squats (4 sets)", sets: 4 },
        { name: "Bulgarian Split Squat (4 sets)", sets: 4 },
        { name: "Calf Raises (4 sets)", sets: 4 },
        { type: 'heading', name: "Shoulders" },
        { name: "Shoulder Press (Machine) (4 sets)", sets: 4 },
        { name: "Barbell Front Raise (4 sets)", sets: 4 },
        { name: "Face Pull (4 sets)", sets: 4 },
        { name: "Barbell Upright Row (4 sets)", sets: 4 },
        { name: "Shoulder Shrugs (4 sets)", sets: 4 }
    ],
    thursday: [
        { type: 'heading', name: "Chest & Triceps" },
        { name: "Chest Fly (4 sets)", sets: 4 },
        { name: "Chest Press (4 sets)", sets: 4 },
        { name: "Pushups Practice (50 reps)", sets: 4 },
        { name: "Pullups Practice (30 reps)", sets: 4 },
        { name: "Tricep Pushdown (4 sets)", sets: 4 },
        { name: "Tricep Kickbacks (4 sets)", sets: 4 },
        { name: "Back Dips (4 sets)", sets: 4 }
    ],
    friday: [
        { type: 'heading', name: "Back" },
        { name: "Pulldown (4 sets)", sets: 4 },
        { name: "Seated Cable Row (4 sets)", sets: 4 },
        { name: "Lat Pulldown (4 sets)", sets: 4 },
        { type: 'heading', name: "Biceps" },
        { name: "Incline Dumbbell Curl (4 sets)", sets: 4 },
        { name: "Preacher Curl (4 sets)", sets: 4 },
        { name: "Hammer Curl (4 sets)", sets: 4 },
        { name: "Concentration Curl (4 sets)", sets: 4 }
    ],
    saturday: [
        { type: 'heading', name: "Legs" },
        { name: "Back Squats (4 sets)", sets: 4 },
        { name: "Bulgarian Split Squat (4 sets)", sets: 4 },
        { name: "Calf Raises (4 sets)", sets: 4 },
        { type: 'heading', name: "Shoulders" },
        { name: "Shoulder Press (Machine) (4 sets)", sets: 4 },
        { name: "Barbell Front Raise (4 sets)", sets: 4 },
        { name: "Face Pull (4 sets)", sets: 4 },
        { name: "Barbell Upright Row (4 sets)", sets: 4 },
        { name: "Shoulder Shrugs (4 sets)", sets: 4 }
    ]
};

function createWorkoutSection(day) {
    const container = document.getElementById('workout-container');
    container.innerHTML = '';
    
    workoutData[day].forEach(item => {
        if(item.type === 'heading') {
            const heading = document.createElement('h2');
            heading.className = 'muscle-group';
            heading.textContent = item.name;
            container.appendChild(heading);
        } else {
            const exerciseCard = document.createElement('div');
            exerciseCard.className = 'exercise-card';
            
            exerciseCard.innerHTML = `
                <h3>${item.name}</h3>
                <div class="checkbox-grid">
                    ${Array.from({ length: item.sets }, (_, i) => `
                        <label class="checkbox-label">
                            <input type="checkbox">
                            <span>Set ${i + 1}</span>
                        </label>
                    `).join('')}
                </div>
            `;
            container.appendChild(exerciseCard);
        }
    });
}

function showDay(day) {
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showDay('${day}')"]`).classList.add('active');
    createWorkoutSection(day);
}

// Initialize with Monday's workout
showDay('monday');