var branch1 = document.getElementById("branch1");
var branch2 = document.getElementById("branch2");
var branch3 = document.getElementById("branch3");

function populateBranch2() {
    branch2.disabled = false;
    branch2.options.length = 0;
    if (branch1.value === "btech") {
        addOption(branch2, "Year", "");
        addOption(branch2, "B.tech 1st yr", "b1");
        addOption(branch2, "B.tech 2nd yr", "b2");
        addOption(branch2, "B.tech 3rd yr", "b3");
        addOption(branch2, "B.tech 4th yr", "b4");
    } else if (branch1.value === "imtech") {
        addOption(branch2, "Year", "");
        addOption(branch2, "Int.M.Tech 1st yr", "m1");
        addOption(branch2, "Int.M.Tech 2nd yr", "m2");
        addOption(branch2, "Int.M.Tech 3rd yr", "m3");
        addOption(branch2, "Int.M.Tech 4th yr", "m4");
        addOption(branch2, "Int.M.Tech 5th yr", "m5");
    }
    branch3.disabled = true;
    branch3.options.length = 0;
}

function populateBranch3() {
    branch3.disabled = false;
    branch3.options.length = 0;
    if (branch2.value === "b1") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Chemical", "b1_1");
        addOption(branch3, "Civil", "b1_2");
        addOption(branch3, "Computer Science", "b1_3");
        addOption(branch3, "Electrical", "b1_4");
        addOption(branch3, "Electronics and Communication", "b1_5");
        addOption(branch3, "Engineering Physics", "b1_6");
        addOption(branch3, "Enviromental", "b1_7");
        addOption(branch3, "Mechanical", "b1_8");
        addOption(branch3, "Mineral and Metallurgical", "b1_9");
        addOption(branch3, "Mining", "b1_10");
        addOption(branch3, "Mining Machinery", "b1_11");
        addOption(branch3, "Petroleum", "b1_12");

    } else if (branch2.value === "b2") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Chemical", "b2_1");
        addOption(branch3, "Civil", "b2_2");
        addOption(branch3, "Computer Science", "b2_3");
        addOption(branch3, "Electrical", "branch1_1_2_4");
        addOption(branch3, "Electronics and Communication", "b2_5");
        addOption(branch3, "Engineering Physics", "b2_6");
        addOption(branch3, "Enviromental", "b2_7");
        addOption(branch3, "Mechanical", "b2_8");
        addOption(branch3, "Mineral and Metallurgical", "b2_9");
        addOption(branch3, "Mining", "b2_10");
        addOption(branch3, "Mining Machinery", "b2_11");
        addOption(branch3, "Petroleum", "b2_12");

    } else if (branch2.value === "b3") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Chemical", "b3_1");
        addOption(branch3, "Civil", "b3_2");
        addOption(branch3, "Computer Science", "b3_3");
        addOption(branch3, "Electrical", "b3_4");
        addOption(branch3, "Electronics and Communication", "b3_5");
        addOption(branch3, "Engineering Physics", "b3_6");
        addOption(branch3, "Enviromental", "b3_7");
        addOption(branch3, "Mechanical", "b3_8");
        addOption(branch3, "Mineral and Metallurgical", "b3_9");
        addOption(branch3, "Mining", "branch1_1_3_10");
        addOption(branch3, "Mining Machinery", "branch1_1_3_11");
        addOption(branch3, "Petroleum", "branch1_1_3_12");

    } else if (branch2.value === "b4") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Chemical", "b4_1");
        addOption(branch3, "Civil", "b4_2");
        addOption(branch3, "Computer Science", "b4_3");
        addOption(branch3, "Electrical", "b4_4");
        addOption(branch3, "Electronics and Communication", "b4_5");
        addOption(branch3, "Engineering Physics", "b4_6");
        addOption(branch3, "Enviromental", "b4_7");
        addOption(branch3, "Mechanical", "b4_8");
        addOption(branch3, "Mineral and Metallurgical", "b4_9");
        addOption(branch3, "Mining", "b4_10");
        addOption(branch3, "Mining Machinery", "b4_11");
        addOption(branch3, "Petroleum", "b4_12");

    } else if (branch2.value === "m1") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Applied Geology", "m1_1");
        addOption(branch3, "Applied Geophysics", "m1_2");
        addOption(branch3, "Mathematics and Computing", "m1_3");

    } else if (branch2.value === "m2") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Applied Geology", "m2_1");
        addOption(branch3, "Applied Geophysics", "m2_2");
        addOption(branch3, "Mathematics and Computing", "m2_3");

    } else if (branch2.value === "m3") {
        addOption(branch3, "Select Branch", "");
        addOption(branch3, "Applied Geology", "m3_1");
        addOption(branch3, "Applied Geophysics", "m3_2");
        addOption(branch3, "Mathematics and Computing", "m3_3");

    } else if (branch2.value === "m4") {
        addOption(branch3,"Select Branch");
        addOption(branch3, "Applied Geology", "m4_1");
        addOption(branch3, "Applied Geophysics", "m4_2");
        addOption(branch3, "Mathematics and Computing", "m4_3");

    } else if (branch2.value === "m5") {
        addOption(branch3, "Select Branch");
        addOption(branch3, "Applied Geology", "m5_1");
        addOption(branch3, "Applied Geophysics", "m5_2");
        addOption(branch3, "Mathematics and Computing", "m5_3");
    }
}

function addOption(select, text, value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    select.add(option);
}

// Cloudinary widget configuration
const myWidget = cloudinary.openUploadWidget({
    cloudName: "dhxrhilfd",
    uploadPreset: "uw_test",
    sources: ["local", "url", "camera", "image_search", "google_drive"],
    resourceType: "auto",
    googleApiKey: '961663441932646',
    searchBySites: ["all", "cloudinary.com"],
    cropping: true,
    multiple: true,
    searchByRights : true,
    use_asset_folder_as_public_id_prefix:true,
    onSuccess: function (result, context) {
        console.log("Upload successful:", result);
        
    },
    onError: function (error, result, context) {
        console.error("Error during upload:", error, result);
        alert("file not uploaded")
        
    }
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log("File uploaded successfully:", result.info);
        alert("file uploaded successfully")
    } else {
        console.error("Error uploading file:", error);
        
    }
});

// Open the widget when the button is clicked
document.getElementById("upload_widget").addEventListener("click", function () {

    myWidget.update({ folder: `${branch1.value}/${branch2.value}/${branch3.value}` });
    myWidget.open();
}, false);

const cloudName = "dhxrhilfd"; // Replace with your Cloudinary cloud name
const uploadPreset = "uw_test"; // Replace with your Cloudinary upload preset

function fetchFiles() {
    const folderSelector = document.getElementById("${branch1.value}/${branch2.value}/${branch3.value}");
    const selectedFolder = folderSelector.value;

    // Fetch files from Cloudinary using fetch API
    fetch(`https://res.cloudinary.com/dhxrhilfd/resources/branch1.value/branch2.value/branch3.value/auto/list.json`)
        .then(response => response.json())
        .then(data => displayFiles(data.resources))
        .catch(error => console.error("Error fetching files:", error));
}

function displayFiles(files) {
    const fileListContainer = document.getElementById("file-list");
    fileListContainer.innerHTML = ""; // Clear previous files

    if (files.length === 0) {
        fileListContainer.textContent = "No files found.";
        return;
    }

    const fileList = document.createElement("ul");

    files.forEach(file => {
        const listItem = document.createElement("li");
        const fileLink = document.createElement("a");
        fileLink.href = file.secure_url;
        fileLink.textContent = file.public_id; // Display file ID or name

        listItem.appendChild(fileLink);
        fileList.appendChild(listItem);
    });

    fileListContainer.appendChild(fileList);
}





