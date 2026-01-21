package com.titan.controller;

import com.titan.model.Cv;
import com.titan.repository.CvRepository;
import com.titan.service.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("/api/cv")
@CrossOrigin(origins = "*")
public class CvController {

    @Autowired
    private CvService cvService;

    @Autowired
    private CvRepository cvRepository; 

    @GetMapping("/all")
    public List<Cv> getAllCvs() {
        return cvRepository.findAll();
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadCv(
            @RequestParam("nomeCompleto") String nomeCompleto,
            @RequestParam("titolo") String titolo,
            @RequestParam("file") MultipartFile file) {
        try {
            Cv savedCv = cvService.storeCv(nomeCompleto, titolo, file);
            return ResponseEntity.ok(savedCv);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Errore: " + e.getMessage());
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadCv(@PathVariable @NonNull Long id) {
        Cv cv = cvRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("CV non trovato"));

        final MediaType application_PDF2 = MediaType.APPLICATION_PDF;
		if (application_PDF2 != null) {
			return ResponseEntity.ok()
			        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"cv_" + id + ".pdf\"")
			        .contentType(application_PDF2)
			        .body(cv.getFileData());
		} else {
			return null;
		}
    }
}