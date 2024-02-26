// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![App])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// Invoke Commands
// Tauri lets you enhance your frontend with native capabilities. We call these Commands, essentially Rust functions that you can call from your frontend JavaScript. This enables you to handle heavy processing or calls to the OS in much more performant Rust code.

// Let's make a simple example:

#[tauri::command]
fn App(name: &str) -> String {
   format!("Hello From App, {}!", name)
}

// A Command is just like any regular Rust function, with the addition of the
// #[tauri::command] attribute macro that allows your function to communicate
// with the JavaScript context.

// Lastly, we also need to tell Tauri about our newly created command so that it can route calls accordingly. This is done with the combination of the .invoke_handler() function and the generate_handler![] macro you can see below:

// Now you're ready to call your Command from the frontend!
// There are two different ways you can invoke commands from your frontend project:
// 1. Using the @tauri-apps/api JavaScript library (preferred)
// 2. Using withGlobalTauri to use a pre-bundled version of the Tauri API
