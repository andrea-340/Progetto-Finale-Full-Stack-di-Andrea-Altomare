package com.titan.service;

import com.titan.model.Cv;
import com.titan.repository.CvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@Service
public class CvService {

    @Autowired
    private CvRepository cvRepository;

    public Cv storeCv(String nomeCompleto, String titolo, MultipartFile file) throws IOException {
        Cv cv = new Cv();
        cv.setNomeCompleto(nomeCompleto);
        cv.setTitolo(titolo);
        cv.setFileData(file.getBytes());
        
        return cvRepository.save(cv);
    }

    public List<Cv> getAllCvs() {
        return cvRepository.findAll();
    }

    public Cv getCv(@NonNull Long id) {
        return cvRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("CV non trovato con id: " + id));
    }
}